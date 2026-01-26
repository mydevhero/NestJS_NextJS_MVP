#!/usr/bin/env bash

# Inizializza il backend

# NOTE: Testato con node --version v24.13.0
# NOTE: Assicurati di installare pnpm [npm install -g pnpm]
# NOTE: Tutti i comandi npm trovati sui tutorial saranno sostituiti dalla controparte pnpm

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$SCRIPT_DIR/backend"
BACKEND_SCRIPT="$SCRIPT_DIR/bin/setup_backend.sh"

FRONTEND_DIR="$SCRIPT_DIR/frontend"
FRONTEND_SCRIPT="$SCRIPT_DIR/bin/setup_frontend.sh"


# Installa i pacchetti mancanti nella root
# if [ ! -d "$SOURCE_DIR/node_modules" ]; then
#   pnpm install
# fi

# Installa il backend se non esiste la directory backend
if [ ! -d "$BACKEND_DIR" ]; then
  "$BACKEND_SCRIPT"
fi

# installa il frontend se non esiste la directory frontend
if [ ! -d "$FRONTEND_DIR" ]; then
  "$FRONTEND_SCRIPT"
fi

# vim: set tabstop=2 shiftwidth=2 expandtab colorcolumn=121 :
