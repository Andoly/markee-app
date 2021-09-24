import * as S from './Aside.style'
import logoMarkee from './logoMarkee.png'
import * as Icon from 'ui/icons'

type File = {
  id: string;
  name: string;
  content: string;
  active: boolean;
  status: 'editing' | 'saving' | 'saved';
};

const files: File[] = [
  {
    id: '0',
    name: 'README.md',
    content: 'Conteúdo do README',
    active: false,
    status: 'saved',
  },
  {
    id: '1',
    name: 'CONTRIBUTING.md',
    content: 'Conteúdo do Contributing',
    active: true,
    status: 'editing',
  },
  {
    id: '3',
    name: 'README.md',
    content: 'Conteúdo do README',
    active: false,
    status: 'saved',
  },
]

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

      <S.ArchivesList>
        {files.map((file) => (
          <S.FileListItem key={file.id}>
            <S.FileItem>
              {file.active ? <Icon.FileSave /> : <Icon.File />} CONTRIBUTING.md
              {!file.active && <S.RemoveIcon />}
            </S.FileItem>
          </S.FileListItem>
        ))}
      </S.ArchivesList>
    </S.AsideContainer>
  )
}

export default Aside
