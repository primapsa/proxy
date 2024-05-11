import { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import {URL} from "@/consts";

const proxyMiddleware: RequestHandler = createProxyMiddleware({
    target: URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/proxy': '/',
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Bearer ${process.env.NEXT_API_KEY}`);
    },

});

const handler = (req: NextApiRequest, res: NextApiResponse) => {

    proxyMiddleware(req, res, (err) => {
        if (err) {
            res.status(500).json({ error: 'Proxy error', details: err.message });
        }
    });
};

export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};
