import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

const extensions = [
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Underline.configure(),
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: 'https',
  }),
]

function TipTapEditor({ editorText, setEditorText, editable = true, value, className }) {
  return (

    <EditorProvider immediatelyRender={true} editable={editable} extensions={extensions} 
    content={editable ? editorText : value} onUpdate={({editor}) => setEditorText(editor.getHTML())} editorProps={{attributes: {class: className}}}></EditorProvider>

  )
}

export default TipTapEditor
	
