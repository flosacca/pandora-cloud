# -*- coding: utf-8 -*-
# Ported from https://github.com/pengzhile/pandora/blob/92f8c362/src/pandora/cloud_launcher.py

import argparse

from . import __version__


def main():
    print(
        '''
            Pandora-Cloud - A web interface to ChatGPT
            Github: https://github.com/pengzhile/pandora
            Version: {}, Mode: cloud, Engine: free
          '''.format(__version__)
    )

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-p',
        '--proxy',
        help='Use a proxy. Format: protocol://user:pass@ip:port',
        required=False,
        type=str,
        default=None,
    )
    parser.add_argument(
        '-s',
        '--server',
        help='Specific server bind. Format: ip:port, default: 127.0.0.1:8018',
        required=False,
        type=str,
        default='127.0.0.1:8018',
    )
    parser.add_argument(
        '--threads',
        help='Define the number of server workers, default: 4',
        required=False,
        type=int,
        default=4,
    )
    args, _ = parser.parse_known_args()

    try:
        from .server import ChatBot as CloudServer

        return CloudServer(args.proxy).run(args.server, args.threads)
    except (ImportError, ModuleNotFoundError):
        print('### You need `pip install Pandora-ChatGPT[cloud]` to support cloud mode.')


if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('### Error occurred: ' + str(e))
