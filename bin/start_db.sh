#!/bin/bash

# Controllo se il container esiste
if docker ps -a --format '{{.Names}}' | grep -q '^quiz_db$'; then
    # Se esiste, lo avvio
    if ! docker ps --format '{{.Names}}' | grep -q '^quiz_db$'; then
        echo "Avvio container quiz_db..."
        docker start quiz_db
    else
        echo "quiz_db è già in esecuzione"
    fi
else
    # Se non esiste, lo creo
    echo "Creazione container quiz_db..."
    docker-compose up -d postgres
fi

#
echo "Attendo PostgreSQL..."
until docker exec quiz_db pg_isready -U user > /dev/null 2>&1; do
    sleep 1
done

echo "PostgreSQL pronto"
