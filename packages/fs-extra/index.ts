import m from 'fs-extra'
export default m

const appendFile = m.appendFile
const appendFileSync = m.appendFileSync
const access = m.access
const accessSync = m.accessSync
const chown = m.chown
const chownSync = m.chownSync
const chmod = m.chmod
const chmodSync = m.chmodSync
const close = m.close
const closeSync = m.closeSync
const copyFile = m.copyFile
const copyFileSync = m.copyFileSync
const cp = m.cp
const cpSync = m.cpSync
const createReadStream = m.createReadStream
const createWriteStream = m.createWriteStream
const exists = m.exists
const existsSync = m.existsSync
const fchown = m.fchown
const fchownSync = m.fchownSync
const fchmod = m.fchmod
const fchmodSync = m.fchmodSync
const fdatasync = m.fdatasync
const fdatasyncSync = m.fdatasyncSync
const fstat = m.fstat
const fstatSync = m.fstatSync
const fsync = m.fsync
const fsyncSync = m.fsyncSync
const ftruncate = m.ftruncate
const ftruncateSync = m.ftruncateSync
const futimes = m.futimes
const futimesSync = m.futimesSync
const lchown = m.lchown
const lchownSync = m.lchownSync
const lchmod = m.lchmod
const lchmodSync = m.lchmodSync
const link = m.link
const linkSync = m.linkSync
const lstat = m.lstat
const lstatSync = m.lstatSync
const lutimes = m.lutimes
const lutimesSync = m.lutimesSync
const mkdir = m.mkdir
const mkdirSync = m.mkdirSync
const mkdtemp = m.mkdtemp
const mkdtempSync = m.mkdtempSync
const open = m.open
const openSync = m.openSync
const opendir = m.opendir
const opendirSync = m.opendirSync
const readdir = m.readdir
const readdirSync = m.readdirSync
const read = m.read
const readSync = m.readSync
const readv = m.readv
const readvSync = m.readvSync
const readFile = m.readFile
const readFileSync = m.readFileSync
const readlink = m.readlink
const readlinkSync = m.readlinkSync
const realpath = m.realpath
const realpathSync = m.realpathSync
const rename = m.rename
const renameSync = m.renameSync
const rm = m.rm
const rmSync = m.rmSync
const rmdir = m.rmdir
const rmdirSync = m.rmdirSync
const stat = m.stat
const statSync = m.statSync
const symlink = m.symlink
const symlinkSync = m.symlinkSync
const truncate = m.truncate
const truncateSync = m.truncateSync
const unwatchFile = m.unwatchFile
const unlink = m.unlink
const unlinkSync = m.unlinkSync
const utimes = m.utimes
const utimesSync = m.utimesSync
const watch = m.watch
const watchFile = m.watchFile
const writeFile = m.writeFile
const writeFileSync = m.writeFileSync
const write = m.write
const writeSync = m.writeSync
const writev = m.writev
const writevSync = m.writevSync
const Dir = m.Dir
const Dirent = m.Dirent
const Stats = m.Stats
const ReadStream = m.ReadStream
const WriteStream = m.WriteStream
const constants = m.constants
const promises = m.promises
const copy = m.copy
const copySync = m.copySync
const emptyDirSync = m.emptyDirSync
const emptydirSync = m.emptydirSync
const emptyDir = m.emptyDir
const emptydir = m.emptydir
const createFile = m.createFile
const createFileSync = m.createFileSync
const ensureFile = m.ensureFile
const ensureFileSync = m.ensureFileSync
const createLink = m.createLink
const createLinkSync = m.createLinkSync
const ensureLink = m.ensureLink
const ensureLinkSync = m.ensureLinkSync
const createSymlink = m.createSymlink
const createSymlinkSync = m.createSymlinkSync
const ensureSymlink = m.ensureSymlink
const ensureSymlinkSync = m.ensureSymlinkSync
const readJson = m.readJson
const readJsonSync = m.readJsonSync
const writeJson = m.writeJson
const writeJsonSync = m.writeJsonSync
const outputJson = m.outputJson
const outputJsonSync = m.outputJsonSync
const outputJSON = m.outputJSON
const outputJSONSync = m.outputJSONSync
const writeJSON = m.writeJSON
const writeJSONSync = m.writeJSONSync
const readJSON = m.readJSON
const readJSONSync = m.readJSONSync
const mkdirs = m.mkdirs
const mkdirsSync = m.mkdirsSync
const mkdirp = m.mkdirp
const mkdirpSync = m.mkdirpSync
const ensureDir = m.ensureDir
const ensureDirSync = m.ensureDirSync
const move = m.move
const moveSync = m.moveSync
const outputFile = m.outputFile
const outputFileSync = m.outputFileSync
const pathExists = m.pathExists
const pathExistsSync = m.pathExistsSync
const remove = m.remove
const removeSync = m.removeSync

export {
	appendFile,
	appendFileSync,
	access,
	accessSync,
	chown,
	chownSync,
	chmod,
	chmodSync,
	close,
	closeSync,
	copyFile,
	copyFileSync,
	cp,
	cpSync,
	createReadStream,
	createWriteStream,
	exists,
	existsSync,
	fchown,
	fchownSync,
	fchmod,
	fchmodSync,
	fdatasync,
	fdatasyncSync,
	fstat,
	fstatSync,
	fsync,
	fsyncSync,
	ftruncate,
	ftruncateSync,
	futimes,
	futimesSync,
	lchown,
	lchownSync,
	lchmod,
	lchmodSync,
	link,
	linkSync,
	lstat,
	lstatSync,
	lutimes,
	lutimesSync,
	mkdir,
	mkdirSync,
	mkdtemp,
	mkdtempSync,
	open,
	openSync,
	opendir,
	opendirSync,
	readdir,
	readdirSync,
	read,
	readSync,
	readv,
	readvSync,
	readFile,
	readFileSync,
	readlink,
	readlinkSync,
	realpath,
	realpathSync,
	rename,
	renameSync,
	rm,
	rmSync,
	rmdir,
	rmdirSync,
	stat,
	statSync,
	symlink,
	symlinkSync,
	truncate,
	truncateSync,
	unwatchFile,
	unlink,
	unlinkSync,
	utimes,
	utimesSync,
	watch,
	watchFile,
	writeFile,
	writeFileSync,
	write,
	writeSync,
	writev,
	writevSync,
	Dir,
	Dirent,
	Stats,
	ReadStream,
	WriteStream,
	constants,
	promises,
	copy,
	copySync,
	emptyDirSync,
	emptydirSync,
	emptyDir,
	emptydir,
	createFile,
	createFileSync,
	ensureFile,
	ensureFileSync,
	createLink,
	createLinkSync,
	ensureLink,
	ensureLinkSync,
	createSymlink,
	createSymlinkSync,
	ensureSymlink,
	ensureSymlinkSync,
	readJson,
	readJsonSync,
	writeJson,
	writeJsonSync,
	outputJson,
	outputJsonSync,
	outputJSON,
	outputJSONSync,
	writeJSON,
	writeJSONSync,
	readJSON,
	readJSONSync,
	mkdirs,
	mkdirsSync,
	mkdirp,
	mkdirpSync,
	ensureDir,
	ensureDirSync,
	move,
	moveSync,
	outputFile,
	outputFileSync,
	pathExists,
	pathExistsSync,
	remove,
	removeSync,
}
