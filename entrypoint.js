// External Dependencies
const { Toolkit } = require('actions-toolkit');
const mm          = require('micromatch');


const tools                    = new Toolkit;
const { patterns: _, payload } = tools.arguments;
const commits                  = payload.commits.filter(c => c.distinct);


if (0 === patterns.length) {
	process.exit(78);
}

commits.forEach( async info => {
	const args   = tools.context.repo({ commit_sha: info.sha });
	const commit = await tools.github.getCommit(args);
	const files  = commit.files.map(f => f.filename);
	
	if (! mm.every(files, patterns)) {
		process.exit(78);
	}
});


process.exit(0);

