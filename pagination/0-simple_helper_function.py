#!/usr/bin/env python3
"""
Simple helper function for pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple of (start_index, end_index)
    corresponding to the pagination range.
    """

    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
