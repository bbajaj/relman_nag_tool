
function toggleTemplateCheckBoxes(elem)
    {

        var div = document.getElementById('template_list');
        var chk = div.getElementsByTagName('input');
        var len = chk.length;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].type === 'checkbox')
                        {
                            chk[i].checked = elem.checked;
                        }
                }
    }

function toggleQueryCheckBoxes(elem)
    {

        var div = document.getElementById('query_list');
        var chk = div.getElementsByTagName('input');
        var len = chk.length;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].type === 'checkbox')
                        {
                            chk[i].checked = elem.checked;
                        }
                }
    }


function validateUse(buttonname)
    {
   
        var div = document.getElementById('template_list');
        
        var chk = div.getElementsByTagName('input');
        var len = chk.length;
        var count=0;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].checked)
                        {
                            count++;
                        }
                    if (count > 1) {
                        break;
                    }
                }
            if (count > 1) {
                alert("You have selected more than one template. Pleas select one.")
            }
            else if (count == 0){
                alert("Please select a template to proceed");
            } else {
                document.getElementById("buttonclicked").value = "use_template";
                document.forms["template"].submit();
            }
    }

function validateEdit(buttonname)
    {
   
        var div = document.getElementById('template_list');
        
        var chk = div.getElementsByTagName('input');
        var len = chk.length;
        var count=0;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].checked)
                        {
                            count++;
                        }
                    if (count > 1) {
                        break;
                    }
                }
            if (count > 1) {
                alert("You have selected more than one template. Pleas select one.")
            }
            else if (count == 0){
                alert("Please select a template to proceed");
            } else {
                document.getElementById("buttonclicked").value = "edit_template";
                document.forms["template"].submit();
            }
    }
    
    
function validateUseQuery(buttonname)
    {
   
        var div = document.getElementById('query_list');
        
        var chk = div.getElementsByTagName('input');
        var len = chk.length;
        var count=0;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].checked)
                        {
                            count++;
                        }
                    if (count > 1) {
                        break;
                    }
                }
                    if (count == 0){
                    alert("Please select a query to proceed");
                } else {
                    document.getElementById("querybuttonclicked").value = "use_query";
                    document.forms["query"].submit();
                }
    }
    
function validateDelete(buttonname)
    {
      

        var div = document.getElementById('template_list');
        var chk = div.getElementsByTagName('input');
        var len = chk.length;
        var count=0;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].checked)
                        {
                            count++;
                        }
                    if (count > 1) {
                        break;
                    }
                }
            if (count == 0){
                alert("Please select atleast one template to proceed");
            } else {
                document.getElementById("buttonclicked").value = "delete_template";
                document.forms["template"].submit();
            }
    }
function validateDeleteQuery(buttonname)
    {
      

        var div = document.getElementById('query_list');
        var chk = div.getElementsByTagName('input');
        var len = chk.length;
        var count=0;

            for (var i = 0; i < len; i ++ )
                {
                    if (chk[i].checked)
                        {
                            count++;
                        }
                    if (count > 1) {
                        break;
                    }
                }
            if (count == 0){
                alert("Please select atleast one  query to proceed");
            } else {
                document.getElementById("querybuttonclicked").value = "delete_query";
                document.forms["query"].submit();
            }
    }