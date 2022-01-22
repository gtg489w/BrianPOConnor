ng build --prod
cp -R ./static/* ./dist/

# Upload build
aws s3 sync ./dist s3://brianpoconnor.com/ --exclude "*.DS_Store" --exclude "*node_modules*" --exclude "*scss*" --exclude "*package.json" --profile personal

# Cache-bust
aws s3 cp s3://brianpoconnor.com/index.html s3://brianpoconnor.com/index.html --metadata-directive REPLACE --cache-control max-age=43200,public --content-type text/html --profile personal
aws cloudfront create-invalidation --distribution-id EM1ADJ25QQ82A --paths "/*" --profile personal
