# OBS Lite

App de streaming minimalista feito com Electron.

## Como gerar o instalador `.exe`

### Passo 1 — Criar repositório no GitHub
1. Acesse https://github.com/new
2. Nome: obs-lite | Deixe público ou privado
3. NAO marque "Add README" | Clique em Create repository

### Passo 2 — Enviar os arquivos
Na página do repositório vazio, clique em "uploading an existing file"
e arraste TODOS os arquivos e pastas deste ZIP.

IMPORTANTE: a pasta .github pode ficar oculta no Windows.
Ative "Mostrar arquivos ocultos" no Explorer antes de arrastar.

Clique em Commit changes.

### Passo 3 — Aguardar o build (~5 minutos)
1. Vá na aba Actions do repositório
2. Verá o workflow "Build OBS Lite for Windows" rodando

### Passo 4 — Baixar o .exe
1. Clique no workflow concluído (ícone verde)
2. Role até Artifacts
3. Clique em OBS-Lite-Windows para baixar
4. Execute o instalador — cria atalho na área de trabalho automaticamente
