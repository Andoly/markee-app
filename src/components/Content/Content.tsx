import { useState, ChangeEvent } from 'react'
import * as S from './Content.style'
import marked from 'marked'
import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})

export function Content () {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.MainContent>
      <S.Header>
        <S.Input defaultValue='Sem título' />
      </S.Header>

      <S.ContentArticle>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />

        <S.ContentSection dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </S.ContentArticle>
    </S.MainContent>
  )
}
