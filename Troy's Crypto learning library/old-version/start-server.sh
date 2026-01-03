#!/bin/bash
# 启动本地服务器脚本

echo "选择一个服务器："
echo "1. Python 3 (推荐)"
echo "2. Python 2"
echo "3. Node.js (需要先安装http-server)"
echo ""
read -p "请输入选项 (1/2/3): " choice

case $choice in
  1)
    echo "启动 Python 3 服务器..."
    python3 -m http.server 8000
    ;;
  2)
    echo "启动 Python 2 服务器..."
    python -m SimpleHTTPServer 8000
    ;;
  3)
    echo "启动 Node.js 服务器..."
    npx http-server -p 8000
    ;;
  *)
    echo "无效选项"
    ;;
esac
