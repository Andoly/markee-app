import { useState, ChangeEvent } from 'react'
import * as S from './Content.style'
import marked from 'marked'

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
