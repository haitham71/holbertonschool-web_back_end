#!/usr/bin/env python3
"""Module for converting values to key-value tuple."""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with the string"""
    return (k, float(v ** 2))
