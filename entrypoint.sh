#!/bin/sh
[ -z "$PANDORA_PROXY" ] || set -- "$@" -p "$PANDORA_PROXY"
[ -z "$PANDORA_SERVER" ] || set -- "$@" -s "$PANDORA_SERVER"
[ -z "$PANDORA_THREADS" ] || set -- "$@" --threads "$PANDORA_THREADS"
cd "${0%/*}/src" && exec python3 -u -m pandora_cloud.launcher "$@"
