import Mock from './mock';

const data = Mock.mock('/api/data', (req, res) => {
    return {
        data: ['a','b']
    }
})