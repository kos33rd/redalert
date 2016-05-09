Ext.define('RedAlert.view.workspace.issue.EstimatedHours', {
    extend: 'Ext.form.field.Text',
    xtype: 'estimatedhoursfield',
    minWidth: 70,
    labelSeparator: '',
    selectOnFocus: true,
    labelWidth: 16,
    ui: 'hours',
    fieldLabel: 'hr',

    // Had to overwrite all template just to switch label position to the right of the input field and add pluralization
    labelableRenderTpl: [
        '<div id="{id}-bodyEl" data-ref="bodyEl" role="presentation"',
            ' class="{baseBodyCls} {baseBodyCls}-{ui}<tpl if="fieldBodyCls">',
            ' {fieldBodyCls} {fieldBodyCls}-{ui}</tpl> {growCls} {extraFieldBodyCls}"',
            '<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>',
            '{beforeBodyEl}',
            '{beforeSubTpl}',
            '{[values.$comp.getSubTplMarkup(values)]}',
            '{afterSubTpl}',
            '{afterBodyEl}',
            // Unlike errorEl below ariaErrorEl is always rendered but is clipped out of existence
            '<div id="{id}-ariaErrorEl" data-ref="ariaErrorEl" role="alert" aria-live="polite"',
                ' class="' + Ext.baseCSSPrefix + 'hidden-clip">',
            '</div>',
        '</div>',
        '{beforeLabelTpl}',
        '<label id="{id}-labelEl" data-ref="labelEl" class="{labelCls} {labelCls}-{ui} {labelClsExtra} ',
            '{childElCls} {unselectableCls}" style="{labelStyle}"<tpl if="inputId">',
            ' for="{inputId}"</tpl> {labelAttrTpl}>',
            '<span class="{labelInnerCls} {labelInnerCls}-{ui}" style="{labelInnerStyle}">',
            '{beforeLabelTextTpl}',
                '<tpl if="value &lt;= 1">hr</tpl>',
                '<tpl if="value &gt; 1">hrs</tpl>',
                '<tpl if="labelSeparator">{labelSeparator}</tpl>',
            '{afterLabelTextTpl}',
            '</span>',
        '</label>',
        '{afterLabelTpl}',
        '<tpl if="renderError">',
            '<div id="{id}-errorWrapEl" data-ref="errorWrapEl" class="{errorWrapCls} {errorWrapCls}-{ui}',
                ' {errorWrapExtraCls}" style="{errorWrapStyle}">',
                '<div role="presentation" id="{id}-errorEl" data-ref="errorEl" ',
                    'class="{errorMsgCls} {invalidMsgCls} {invalidMsgCls}-{ui}" ',
                    'data-anchorTarget="{tipAnchorTarget}">',
                '</div>',
            '</div>',
        '</tpl>',
        {
            disableFormats: true
        }
    ],

    getLabelableRenderData: function(){
        var data = this.callParent();
        data.value = this.getRawValue();
        return data;
    }
});
