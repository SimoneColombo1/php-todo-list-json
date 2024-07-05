
const { createApp } = Vue

createApp({

    data() {
        return {
            todolist: [],
            api: './api/list.php',
        }
    },

    methods: {
        getTodoList() {
            axios.get(this.api)
                .then((response) => {
                    console.log(response.data.list);
                    this.todolist = response.data.list;

                })
                .catch(function (error) {

                    console.log(error);


                })

                .finally(function () {


                })

        }
    },
    created() {
        this.getTodoList()
    },
}).mount('#app')

