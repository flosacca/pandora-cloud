#!/bin/sh
cd "${0%/*}/src" && exec python3 -m pandora_cloud.launcher "$@"
