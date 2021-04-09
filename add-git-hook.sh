#!/bin/sh
# Adds the git-hook described below. Appends to the hook file
# if it already exists or creates the file if it does not.
# Note: CWD must be inside target repository

HOOK_DIR=$(git rev-parse --show-toplevel)/.git/hooks
HOOK_FILE="$HOOK_DIR"/pre-commit

# Create script file if doesn't exist
if [ ! -e "$HOOK_FILE" ] ; then
        echo '#!/bin/sh' >> "$HOOK_FILE"
        chmod 700 "$HOOK_FILE"
fi

# Append hook code into script
cat >> "$HOOK_FILE" <<EOF

#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.

if grep '^\s*SITE_HOST: "http://localhost:8080"' frontend/public/widget/*.js
then
    exit 1
fi

EOF