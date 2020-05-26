import React from 'react';
import ReactQuill from 'react-quill';
import './Quill.css';

class Editor extends React.Component {
    constructor (props) {
      super(props)
    }
    
    handleChange = (html) => {
       var newState = {
         story: html
       }
       this.props.changeState(newState);
    }
        
    render () {
      return (
        <div className="quill container">
          <ReactQuill 
            theme = "snow"
            onChange = {this.handleChange}
            value = {this.props.story}
            modules = {Editor.modules}
            formats = {Editor.formats}
            bounds = {'.app'}
            placeholder = "Fill your story here..."
           />
         </div>
       )
    }
  }

  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline','blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]



  export default Editor;