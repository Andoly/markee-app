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

type AsideProps = {
  files: File[];
  onAddFile: () => void;
};

export function Aside ({ files, onAddFile }: AsideProps) {
  return (
    <S.AsideContainer>
      <S.LinkLogo>
        <S.Logo src={logoMarkee} alt='markee.' />
      </S.LinkLogo>
      <S.Archive>Arquivos</S.Archive>
      <S.ButtonPlus onClick={onAddFile}>
        <Icon.Plus /> Adicionar arquivo
      </S.ButtonPlus>

      <S.ArchivesList>
        {files.map((file) => (
          <S.FileListItem key={file.id}>
            <S.ArchiveItem href={`/file/${file.id}`} active={file.active}>
              {file.name}
            </S.ArchiveItem>
            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.ArchivesList>
    </S.AsideContainer>
  )
}
