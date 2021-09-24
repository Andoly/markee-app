import * as S from './Content.style'

export function Content () {
  return (
    <S.MainContent>
      <S.Header>
        <S.Input defaultValue='Sem título' />
      </S.Header>

      <S.ContentArticle>
        <S.Textarea placeholder='Digite aqui seu markdown' />

        <S.ContentSection>
          <h1>Bootcamp Brainn Co.</h1>
          <p>Lorem ipsum dolor sit amet simet</p>
        </S.ContentSection>
      </S.ContentArticle>
    </S.MainContent>
  )
}
