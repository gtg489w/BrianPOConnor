ng build --prod
cp ./static/* ./dist/

aws s3 sync ./dist s3://brianpoconnor.com/ --exclude "*.DS_Store*" --profile personal
aws cloudfront create-invalidation --distribution-id EM1ADJ25QQ82A --paths "/*" --profile personal
