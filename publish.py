import os
import shutil
import codecs
import time
import base
'''
kone read me:
1、指定好游戏发布的git目录 gitPath, 该git目录要先自己先 git clone 好
2、开发完运行此脚本,则会自动打包，然后拷贝新包文件到 gitPath 并提交、推送上git
3、该git有其他人改过要自己手动去同步
4、如果有app版本或其他版本，你还是建多一份 index-app.html 和 publishapp.py 吧！
'''
verTag = ''  #kone todo 版本标签 默认为h5版本
gitPath = 'D:/work/git-fac/test(kaye'
prjPath = os.getcwd()

curTime = time.time()
lt = time.localtime(curTime)

# git 提交日志
gitLog = verTag + '-' + str(lt.tm_mon) + '月' + str(lt.tm_mday) + '日-' + str(lt.tm_hour) + ':' + str(lt.tm_min) 


# 资源版本号， 图片、声音、json等
resVer = base.getResVer()
print('resVer' + resVer)

# step :  ############################
''' '''
filePath = prjPath + '\\index.html'
if base.checkHaLet(filePath):
	print("error : index.html 有 let")
	os._exit(0)
base.addVer_html(filePath, resVer)
# 
base.addVer_buildLog(prjPath + '\\build\\buildLog.js', resVer)
# 
# base.addVer_less(prjPath + '\\src\\css\\global.less', resVer)


# step : vue 打包  ########################################################
''' '''
dirPath = base.vuePublish()
if dirPath == '':
	print('error: 打包失败！')
	os._exit(0)






