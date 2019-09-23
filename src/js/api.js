import axios from 'axios';

export default {
    send: (options) => {
        axios
            .post(options.url, options.data)
            .then((response) => {
                const data = response.data;
                if (!data || data.code !== 0) {
                    options.error && options.error(data && data.msg);
                    return;
                }
                options.success && options.success(data);
            })
            .catch((e) => {
                console.error(e);
                options.error && options.error();
            });
    },

    read: (options) => {
        axios
            .get(options.url)
            .then((response) => {
                const data = response.data;
                if (!data || data.code !== 0) {
                    options.error && options.error(data && data.msg);
                    return;
                }
                options.success &&
                    options.success(
                        data.data.map((item) => ({
                            time: item[0],
                            type: item[1],
                            color: item[2],
                            author: item[3],
                            text: item[4],
                        }))
                    );
            })
            .catch((e) => {
                console.error(e);
                options.error && options.error();
            });
    },
};
