let app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks = []


    this.FetchAll = function(){
        let data= '';

        if(this.tasks.length){
            for(i=0; i<this.tasks.length; i++){
                data+= '<tr>';
                data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data+=<td><button onclick="app.Edit('+i+')"
                class="btn btn-warning">Edit</button></td>  ;
                data+= <td><button onclick="app.Delete('+i+')"
                class="btn btn-danger">Delete</button></td> ;
                data+= '</tr>'
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data

    };

    this.Add = function (){

    };

    this.Edit = function (item){

    };

    this.Delete = function (item){

    };

    this.Count = function (data){

    };
}
app.FetchAll();

function CloseInput (){
    document.getElementById('edit-box').style.display = 'none'
}