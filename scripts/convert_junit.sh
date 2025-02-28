#!/bin/bash

# Version 5.0.0 tap-junit has breaking changes that are currently getting fixed
npm install -g tap-junit@4.2.0
mkdir report_converted/
cd "./megalinter-reports/tap"
ls -lah
for report in *; do
  OUTNAME="JUNIT-${report}.xml"
  echo "Converting $report to $OUTNAME"
# workaround for https://github.com/dhershman1/tap-junit/issues/30#issuecomment-744462006
  sed -i "s/message: \*\+/message: /g" $report
# Some message got comments with # which are ignored by tap-junit, so we escape it
  sed -i -E "s/(^|[ ]+)(#)[a-zA-Z]*/\1\/\//g" $report
# Converting TAP files into xml files with JUnit5 format
  cat $report | tap-junit -p -s "mega-linter" > ../../report_converted/${OUTNAME}
# Remove escaping on newlines for readability
  sed -i 's/\\n/\n/g' ../../report_converted/${OUTNAME}
# Replace ANSI colors as they are illegal characters
  sed -i 's/\x1b\[[0-9;]*m//g' ../../report_converted/${OUTNAME}
  echo "Done with $report."
done