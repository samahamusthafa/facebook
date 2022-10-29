$(document).ready(function(){
    var form = $("#form");
    if(form.length){
        form.validate({
            rules:{
                fname:{
                    required: true
                },
                sname:{
                    required: true
                    
                },
                email:{
                    required: true,
                    email:true
                },
                password:{
                    required: true,
                    minlength:[8]
                }
            },
            messages:{
                fname:{
                    required: 'Please enter first name'
                },
                sname:{
                    required:'Please enter surname'
                },
                email:{
                    required: 'Please enter email',
                    email:'Please enter valid email!'
                },
                password:{
                    required: 'Please enter password',
                    minlength:'please enter atleast 8 characters'
                }
                
            },
            
        })
    }
})