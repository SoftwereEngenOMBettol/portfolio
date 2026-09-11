#!/usr/bin/env bash
# ---------------------------------------------------------------
# Copies the 16 new certificates into the portfolio with clean,
# URL-safe names. Run from the ROOT of your portfolio repo.
#
#   bash add-certificates.sh /path/to/"all certifiacts"
# ---------------------------------------------------------------
set -euo pipefail
SRC="${1:?Usage: bash add-certificates.sh /path/to/all\ certifiacts}"
DEST="assets/certificates"

mkdir -p "$DEST/coursera" "$DEST/oracle" "$DEST/edraak"

cp "$SRC/Coursera/Coursera XDFY44DVY70Y.pdf" "$DEST/coursera/google-ux-professional-certificate.pdf"
cp "$SRC/Coursera/Coursera NR8P2QJ1ZJJD.pdf" "$DEST/coursera/ux-foundations.pdf"
cp "$SRC/Coursera/Coursera 3LFEBGNNJ0H9.pdf" "$DEST/coursera/ux-empathize-define-ideate.pdf"
cp "$SRC/Coursera/Coursera UGZ2G28UKOT5.pdf" "$DEST/coursera/ux-wireframes-lofi.pdf"
cp "$SRC/Coursera/Coursera EY6RPYUYT5PG.pdf" "$DEST/coursera/ux-research-testing.pdf"
cp "$SRC/Coursera/Coursera RZQTVE8PVOMX.pdf" "$DEST/coursera/ux-hifi-figma.pdf"
cp "$SRC/Coursera/Coursera 2PE4K53E9JM3.pdf" "$DEST/coursera/ui-dynamic-interfaces.pdf"
cp "$SRC/Coursera/Coursera Z3G8B6D82GS5.pdf" "$DEST/coursera/ux-social-good.pdf"

cp "$SRC/ORACLE/JAVA ORACLE Certificate.pdf"            "$DEST/oracle/java-foundations.pdf"
cp "$SRC/ORACLE/ORACLE Database system Certificate.pdf" "$DEST/oracle/database-programming-sql.pdf"

# Edraak — source folders have Arabic names, so match by content order
cp "$SRC/إدراك/UI.pdf"     "$DEST/edraak/ui-design-principles.pdf"
cp "$SRC/إدراك/اكسل.pdf"   "$DEST/edraak/advanced-excel.pdf"
cp "$SRC/كوادر/1.pdf"      "$DEST/edraak/agile-project-management.pdf"
cp "$SRC/كوادر/2.pdf"      "$DEST/edraak/arduino-fundamentals.pdf"
cp "$SRC/كوادر/3.pdf"      "$DEST/edraak/start-manage-business.pdf"
cp "$SRC/كوادر/4.pdf"      "$DEST/edraak/digital-transformation.pdf"

echo "✓ Copied 16 certificates into $DEST"
find "$DEST/coursera" "$DEST/oracle" "$DEST/edraak" -type f | wc -l
