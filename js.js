$(document).ready(function() // all ur code in this function
    {

        // $("#addButton").click(function()
        // {
        //     $("#ToDoDiv").append('<div class="d-flex bg-dark text-light p-3 rounded-pill m-2 ToDOItem"> <span class="w-100">'+$("#AddTask").text()+'</span><i class="material-icons">done</i><i class="material-icons">delete</i></div>');
            
        // });
        // $("#AddTask").keypress(function(e)
        // {});
            
        $("#AddTask, #addButton").on("keypress click",function(e)
        {
            
             if(( e.keyCode=="13" && e.type=="keypress")||($(this).attr("id")=="addButton")&& e.type=="click"){
                // alert("yay u clicked enter 13 is Enter in code"+textSpan);}
                // $("#ToDoDiv").append(div);
        
            let div=$('<div class="d-flex bg-dark text-light p-3 rounded-pill m-2 ToDOItem"></div>');
            let textSpan =$('<span class="w-100"></span>');
            let iconDone=$('<i class="iconDone material-icons">done</i>');
            let iconDelete=$('<i class="material-icons">delete</i>');
            // $() to make it obj so we can deal with it now 
            textSpan.text($("#AddTask").val());
            $("#AddTask").val("");
    
            div.append(textSpan);
            div.append(iconDone);
            div.append(iconDelete);
            $("#ToDoDiv").append(div);

            iconDelete.click(function()
            {
                $(this).parent().fadeOut(function()
                {
                    $(this).remove();
                })
            });

            iconDone.click(function()
            {
                $(this).parent().fadeOut(function()
                {
                    $(this).find(".iconDone").remove();
                    $("#CompletedDiv").append($(this));
                })
            });
             }    
        });



        
    });
