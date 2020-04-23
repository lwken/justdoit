

var bookList = [
    { id: 1, name: '三国演义',author:"罗贯中" },
    { id: 2, name: '水浒传',author:"施耐庵" },
    { id: 3, name: '红楼梦',author:"曹雪芹" },
    { id: 4, name: '西游记',author:"吴承恩" },
]

var modal={
    methods: {
        showModal:function (id) {
            $("#"+id).show();
            $("#"+id).wrap("<div class='shade'></div>");
        },
        hideModal:function (id) {
            $("#"+id).hide();
            $("#"+id).unwrap();
        }

    }
};

var app=new Vue({
    el:"#app",

    mixins:[modal],


});















