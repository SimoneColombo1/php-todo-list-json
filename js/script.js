
const { createApp } = Vue

createApp({

    data() {
        return {
            todolist: [],
            name: '',
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

        },

        NewTask(name) {

            task = {
                attività: name,
                completed: false

            };
            this.todolist.push(task);
            this.name = "";

        }

    },
    created() {
        this.getTodoList()
    },
}).mount('#app')

