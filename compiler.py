"""This file provides a basic post compiler"""

from os.path import dirname, join

from wotw_blogger import Compiler

CURRENT_DIR = dirname(__file__)
POSTS_DIR = join(CURRENT_DIR, 'posts')
TEMPLATES_DIR = join(CURRENT_DIR, 'templates')
BUILD_DIR = join(CURRENT_DIR, 'build')

COMPILER = Compiler(
    POSTS_DIR,
    TEMPLATES_DIR,
    BUILD_DIR
)
COMPILER.compile_everything()
