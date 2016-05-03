Ext.define('RedAlert.utils.RestProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.backendrest',
    uses: ['Env'],

    /**
     * Handles proxy requests build and injects request parameters into URL, replacing placeholders
     * Removes replaced parameters from request body (QueryString for GET, JSON body for PUT/POST)
     *
     * Usage: in your proxy definition you have to set type to 'backendrest',
     * after that you could use following URL definition:
     * ``` url: 'projects/{project_id}/versions.json', ```
     * In this case parameter "project_id" from GET or POST parameters will be moved to URL path, replacing placeholder.
     * ``` store.load({params: {project_id: 5}}); ```
     * will generate request to url
     * ```projects/5/versions.json```
     *
     * @param operation Operation (Ext.data.Operation)
     * @returns {Ext.data.Request}
     */
    buildRequest: function (operation) {
        //catching original request
        var request = this.callParent(arguments);

        //catching URL params
        var url = request.getUrl();
        var tplParamsRe = /\{([^{][^:}]*):?[^}]*}([^}]|$)/g;
        var tplParams = [];
        var match;
        while (match = tplParamsRe.exec(url)) {
            tplParams.push(match[1]);
        }
        tplParams = Ext.Array.unique(tplParams);
        //extracting parameters from request
        var params = request.getParams();
        var templateContext = {};
        Ext.Array.each(tplParams, function (tplParam) {
            //pushing parameter into template context
            templateContext[tplParam] = params[tplParam];
            //and removing it from request params
            delete params[tplParam];
        });

        //extracting parameters from store filters (useful with reference stores)
        if(params.hasOwnProperty('filter')) {
            Ext.merge(templateContext, this.getFilterVariables(Ext.JSON.decode(params['filter']), tplParams));
        }

        //applying template to url
        var urlTpl = new Ext.XTemplate(url);
        url = urlTpl.apply(templateContext);

        //updating request url
        request.setUrl(url);
        if ((operation.getAction() === 'read') && this.actionMethods && (this.actionMethods.read === 'POST')) {
            request.setParams({});
            request.setJsonData(params);
        }

        return request;
    },

    /**
     * Extracts parameters for URL from Ext.util.Filter "filters" array.
     * @param filters[] Array of Ext.util.Filter representations
     * @param tplParams[] Array of required inline parameters from URL template
     * @returns {Object} Associative array of url template keys and their values
     */
    getFilterVariables: function (filters, tplParams) {
        var filterTemplateParams = {};
        Ext.Array.each(filters, function(filter){
            if(filter.exactMatch && tplParams.indexOf(filter.property) != -1){
                filterTemplateParams[filter.property] = filter.value;
            }
        });
        return filterTemplateParams;
    },

    /**
     * Injects backend url prefix from environment definitions.
     *
     * @returns {string}
     */
    buildUrl: function () {
        return Env.get('backend_url') + '/' + this.url;
    },

    /**
     * Injects Redmine API key from environment definitions into request header.
     * Redmine-specific. Do not reuse on non-redmine backends.
     *
     * @param cfg
     */
    initConfig: function (cfg) {
        cfg.headers = cfg.headers || {};
        cfg.headers['X-Redmine-API-Key'] = Env.get('api_key');
        this.callParent(arguments);
    }
});