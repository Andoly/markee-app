import * as S from './Aside.style'
import logoMarkee from './logoMarkee.png'
import * as Icon from 'ui/icons'

const Aside = () => {
  return (
    <S.AsideContainer>
      <S.LinkLogo>
        <S.Logo src={logoMarkee} alt='markee.' />
      </S.LinkLogo>
      <S.Archive>Arquivos</S.Archive>
      <S.ButtonPlus>
        <Icon.Plus /> Adicionar arquivo
      </S.ButtonPlus>
    </S.AsideContainer>
  )
}

export default Aside
