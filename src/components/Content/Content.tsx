import { ChangeEvent, RefObject } from 'react'
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

type File = {
  id: string;
  name: string;
  content: string;
  active: boolean;
  status: 'editing' | 'saving' | 'saved';
};

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
          defaultValue='Sem título'
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
