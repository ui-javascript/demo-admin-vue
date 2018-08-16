/**
 * 编辑器
 */
import React from 'react'
import { Editor } from 'react-draft-wysiwyg' // 这个版本的编辑器
import styles from './Editor.less'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css' // 编辑器样式


const DraftEditor = (props) => {
  return (
    <Editor toolbarClassName={styles.toolbar}
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor} {...props}
    />
  )
}

export default DraftEditor
