#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

branch=$(git symbolic-ref --short -q HEAD)

pnpm build

git push origin $branch:$branch
pnpx gh-pages -d build
echo -e '\033[32m 已部署成功至sanm-zh.github.io \n'

git remote set-url origin git@gitee.com:sanm-zh/react-demo.git
git push origin $branch:$branch
pnpx gh-pages -d build
echo -e '\033[32m 已部署成功至sanm-zh.gitee.io'
echo -e '\033[32m 如果不是gitee pro用户请手动更新gitee pages服务 \n'

git remote set-url origin git@github.com:Sanm-ZH/react-demo.git
