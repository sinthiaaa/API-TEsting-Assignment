const newman = require('newman');

newman.run({
    collection: 'D:\\QA Doc\\API TEsting Assignment\\collection\\collection.json',
    environment: 'D:\\QA Doc\\API TEsting Assignment\\collection\\environment.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: 'D:\\QA Doc\\API TEsting Assignment\\Reports\\report.html',
            logs: true,
            showOnlyFails: false,
            displayProgressBar: true
        }
    }
}, function (err, summary) {
    if (err) { 
        console.error('Collection run error:', err); 
    } else {
        console.log('Collection run complete!');
        console.log('Total requests:', summary.run.stats.requests.total);
        console.log('Total assertions:', summary.run.stats.assertions.total);
        console.log('HTML report generated at Reports\\report.html');
    }
});