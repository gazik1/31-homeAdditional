export class FormFileApp extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML=`
        <style>
        form>*{
            display: block;
            margin: 10px 0;
        }
        input[type=file]::file-selector-button {
            padding: 20px;
            background-color: darkgray;
            border: 0;
            border-radius: 4px;
        }
        input[id="#file-upload-button"]{
            background-color: darkgray;

        }
    
    </style>

    <form id="form-file">
        <input name="file" type="file"  accept=".png, .jpg, .jpeg">
        <button name="button" type="button">файл</button>
    </form>`
 
let form = document.getElementById("form-file");


  form.file.addEventListener("change", (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(form.file.files[0])
    reader.onload = function() {
        console.log(reader.result);
      };
  });
    }



}