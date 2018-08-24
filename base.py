import os
import shutil
import codecs
import time

#检测脚本是否用了  let  
def checkHaLet(srcFile):
	with open(srcFile,"r", encoding='utf-8') as file:
		for line in file.readlines():
			if line.find('let') != -1:
				return True
		return False


# 修改 .html 中的 BIN_VER 版本号
def addVer_html(srcFile, newVer):
	hasAddVer = False
	count = 0
	content = ''
	with open(srcFile,"r",encoding='utf-8') as file:
		for line in file.readlines():
			count = count + 1
			if line.find('var BIN_VER') != -1 and hasAddVer == False:
				hasAddVer = True
				content += '		var BIN_VER = "' + newVer + '";\n'
			else :
				content += line 
	# 
	targetfile = open(srcFile, "w+", encoding='utf-8')
	targetfile.write(content)
	targetfile.close()


# 修改 .html 中的 BIN_VER 版本号
def addVer_pyBuildConf(srcFile, newVer, prjTag):
	count = 0
	content = ''
	with open(srcFile,"r",encoding='utf-8') as file:
		for line in file.readlines():
			count = count + 1
			if line.find('resVer') != -1:
				content += '	resVer: "' + newVer + '",\n'
			if line.find('prjTag') != -1:
				content += '	prjTag: "' + prjTag + '"\n'
			else :
				content += line
	#
	targetfile = open(srcFile, "w+", encoding='utf-8')
	targetfile.write(content)
	targetfile.close()


# .less 中的 BIN_VER 版本号
def addVer_less(srcFile, newVer):
	hasAddVer = False
	count = 0
	content = ''
	with open(srcFile,"r",encoding='utf-8') as file:
		for line in file.readlines():
			count = count + 1
			if line.find('@g_ver') != -1 and hasAddVer == False:
				hasAddVer = True
				content += '@g_ver:"?' + newVer + '";\n'
			else :
				content += line 
	# 
	targetfile = open(srcFile, "w+", encoding='utf-8')
	targetfile.write(content)
	targetfile.close()


# 打包vue
# return 打出来的包路径
def vuePublish():
	curPath = os.getcwd()
	st = os.system('npm run build')
	if st == 0:
		binPath = curPath + '\\dist'
		# print('打包成功：' + binPath)
		return binPath
	else :
		# print('error: 打包失败！')
		return ''

# 
def getResVer():
	curTime = time.time()
	lt = time.localtime(curTime)
	month = lt.tm_mon
	strDate = lt.tm_mday
	hour = lt.tm_hour
	minutes = lt.tm_min
	if month <= 9 :
		month = "0" + str(month)
	if strDate <= 9 :
		strDate = "0" + str(strDate)
	if hour <= 9 :
		hour = "0" + str(hour)
	if minutes <= 9 :
		minutes = "0" + str(minutes)
	return (str(month) + str(strDate) + str(hour) + str(minutes))


#拷贝或覆盖文件夹
def copyFolder(srcPath, destPath):
	for path in os.listdir(srcPath):
		subSrcPath = os.path.join(srcPath, path)
		subDestPath = os.path.join(destPath, path)
		if os.path.isfile(subSrcPath):  
			coverFile(subSrcPath, subDestPath)
		else:
			if os.path.exists(subDestPath):    #删除子目录
				shutil.rmtree(subDestPath)
			copyFolder(subSrcPath, mkdir(subDestPath))


#拷贝或覆盖单个文件
def coverFile(srcFilePath, destFliePath):
	if os.path.exists(destFliePath):
		os.remove(destFliePath)
	shutil.copy(srcFilePath, destFliePath)


#创建目录结构
def mkdir(path):
	isExists = os.path.exists(path)
	if not isExists:
		os.makedirs(path) 
	return path



# git提交并推送
def gitPusher(path, log):
	isSucc = os.chdir(path)
	os.system('git add .')
	os.system('git commit -m ' + log)
	os.system('git push')