Ext.define('RedAlert.store.Statuses', {
    extend: 'Ext.data.Store',
    model: 'RedAlert.model.Status',
    storeId: 'issue_statuses',
    autoLoad: true,
    filters: [{
        property: 'name',
        operator: 'notin',
        value: [
            'В подвале',
            'Приостановлена',
            'Назначена',
            'Тест пройден',
            'Ожидает ТЗ',
            'Анализ',
            'Разработка',
            'Тестирование',
            'Накат',
            'Завершена'
        ]

    }]
});