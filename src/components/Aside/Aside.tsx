import { MouseEvent } from 'react'
import * as S from './Aside.style'
import logoMarkee from './logoMarkee.png'
import * as Icon from 'ui/icons'
import { File } from 'resources/files/types'

type AsideProps = {
  files: File[];
  onAddFile: () => void;
  onSelectFile: (id: string) => (event: MouseEvent) => void;
  onRemoveFile: (id: string) => void;
};

export function Aside ({ files, onAddFile, onSelectFile, onRemoveFile }: AsideProps) {
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
            <S.ArchiveItem
              href={`/file/${file.id}`}
              active={file.active}
              onClick={onSelectFile(file.id)}
            >
              {file.name}
            </S.ArchiveItem>
            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.RemoveButton
                title={`Remover o arquivo ${file.name}`}
                onClick={() => onRemoveFile(file.id)}
              >
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.ArchivesList>
    </S.AsideContainer>
  )
}
