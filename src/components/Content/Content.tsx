import marked from 'marked'
import 'highlight.js/styles/github.css'
import { ChangeEvent, RefObject } from 'react'
import * as S from './Content.style'
import { File } from 'resources/files/types'

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

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>;
  file?: File;
  onChangeFileName: (
    id: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContentFile: (
    id: string
  ) => (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Content ({
  inputRef,
  file,
  onChangeFileName,
  onChangeContentFile,
}: ContentProps) {
  if (!file) {
    return null
  }

  return (
    <S.MainContent>
      <S.Header>
        <S.Input
          ref={inputRef}
          value={file.name}
          onChange={onChangeFileName(file.id)}
        />
      </S.Header>

      <S.ContentArticle>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={onChangeContentFile(file.id)}
        />

        <S.ContentSection
          dangerouslySetInnerHTML={{ __html: marked(file.content) }}
        />
      </S.ContentArticle>
    </S.MainContent>
  )
}
