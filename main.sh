echo Please Wait....
mkdir ../.gem
cp -r gemBINS/* ../.gem
chmod +x /home/runner/.gem/ruby/2.5.0/bin/*
export PATH=/home/runner/.gem/ruby/2.5.0/bin:$PATH
jekyll -v
cd site
JEKYLL_ENV=replit jekyll serve -P 8080 --host=0.0.0.0