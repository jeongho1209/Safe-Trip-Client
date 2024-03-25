module.exports = {
    extends: [],
    rules: {
        'type-enum': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'type-enum': ({ header }) => {
                    const types = new Set([
                        'build',
                        'ci',
                        'chore',
                        'design',
                        'docs',
                        'add',
                        'feat',
                        'fix',
                        'perf',
                        'refactor',
                        'style',
                        'test',
                        'revert',
                        'merge',
                        'project',
                        'delete',
                    ]);
                    return [
                        types.has(header.split(':')[0]),
                        `${header.split(':')[0]}은 type으로 사용할 수 없습니다.`,
                    ];
                },
            },
        },
    ],
};