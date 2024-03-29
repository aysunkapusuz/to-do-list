let app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks = []


    this.FetchAll = function(){
        let data= '';

        if(this.tasks.length > 0){
            for(i=0; i<this.tasks.length; i++){
                data += '<tr>';
                data +='<td>'+(i+1)+". " + this.tasks[i]+'</td>';
                data +='<td><button onclick="app.Edit('+i+')" style="background-color:rgb(146, 146, 9); color:white;">Edit</button></td>'  ;
                data +='<td><button onclick="app.Delete('+i+')" style="background-color:red; color:white;">Delete</button></td>' ;
                data += '</tr>'
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data

    };

    this.Add = function (){
        el = document.getElementById('add');
        let task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value = '';
            this.FetchAll();
        }

    };

    this.Edit = function (item){
        el = document.getElementById('edit');
        this.el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function (){
            let task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }

    };

    this.Delete = function (item){
        this.tasks.splice(item, 1)
        this.FetchAll();

    };


    this.Count = function (data){
        let el = document.getElementById('counter');
        let name = 'Tasks';
        if(data){
            if(data == 1){
                name = 'Task';
            }
            el.innerHTML = `${data} ${name}`
        }
        else{ 
            el.innerHTML = `No ${name}`
        }

    };
}
app.FetchAll();

function CloseInput (){
    document.getElementById('edit-box').style.display = 'none'
}
