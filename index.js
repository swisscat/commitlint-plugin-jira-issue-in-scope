module.exports = {
    rules: {
        'jira-issue-in-scope': function (input) {
            return [
                input.scope && input.scope.match(/^((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-[1-9][0-9]*)$/g),
                'Your scope should contain a JIRA issue number (ex. feat(ABC-123) : description)'
            ];
        }
    }
};
