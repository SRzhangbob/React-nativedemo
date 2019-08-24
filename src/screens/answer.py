#!usr/bin/python
# conding:utf-8
"""

"""

def fizzbuzz(lst):
    """
    The Problem is go through all numbers in input list.
    If the number divisible by three is replaced by the word 'fizz'
    and any divisible by five by the word 'buzz'.
    Numbers divisible by both become 'fizzbuzz'.
    Example
    -------
    Input lst: [1, 3, 5, 7, 9, 11, 13, 15]
    Output: [1, 'fizz', 'buzz', 7, 'fizz', 11, 13, 'fizzbuzz']
    Parameter
    ---------
    lst: list
    list of integers
    Return
    ------
    list
    Be replaced new list.
    """
    ret = []
    for number in lst:
        if (number % 3 == 0 and number % 5 == 0):
            ret.append('fizzbuzz')
        elif (number % 3 == 0):
            ret.append('fizz')
        elif (number % 5 == 0):
            ret.append('buzz')
        else:
            ret.append(number)
    return ret


"""
SQL code
select student_id,course_score from (select student_id,count(score.course_score) as course_score from score group by student_id)  where course_score=max(course_score);

"""


def moving_back(moves):
    """
    The problem is that you need to consider a robot
    that can be given an input string in the form
    of U, D, L, R - Move Up, Move Down, Move Left, Move Right.
    For instance: 'UULL'
    start position
    If the robot starts at the origin (0,0), each input
    moves the robot in the given direction by 1 meter.
    So if input is 'UUL', the robot will move up by 2
    meters and then move to left 1 meter.
    Simialrly if input is 'UD' or 'LR' the robot will
    be back in the origin.
    The problem is that for a given input string of
    movements, you need to determine if the robot is
    back in the origin or not.
    Parameter
    ---------
    str: moves
    A list of movements, only contains 'U','D','L','R'
    Return
    ------
    bool
    Whether robot back to starting position.
    Example
    -------
    >>> moving_back('UU')
    False
    >>> moving_back('UDLR')
    True
"""
    rCount = 0
    lCount = 0
    dCount = 0
    uCount = 0
    for move in moves:
        if move == 'R':
            rCount += 1
        elif move == 'L':
            lCount += 1
        elif move == 'U':
            uCount += 1
        else:
            dCount += 1
    return (rCount == lCount and uCount == dCount) 


def longest_common_prefix(lst):
    """
    Write a function to find the longest common prefix string
    amongst an array of strings. If there is no common prefix,
    return an empty string "".
    Parameter
    ---------
    list: lst
    list of strings
    Return
    ------
    str
    The longest common prefix in all elements of lst.
    If there is no common prefix, return ""
    Example
    -------
    >>> longest_common_prefix(['dog', 'done', 'doing'])
    'do'
    >>> longest_common_prefix(['dog', 'cat', 'bird'])
    ''
    """
    if not lst:
        return ""
    minStr = min(lst)
    maxStr = max(lst)
    for i, c in enumerate(minStr):
        if c != maxStr[i]:
            return minStr[:i]
    return minStr


def pre_deal_with():
    """
    a function to get filename and k number from console. you have to
    input the file name and k number according to the prompt.Then it 
    will be the input parameters of the function find_top_k_words.
    a function to find the top k most frequent word in a text
    Parameter
    ---------
    ""
    Return
    ------
    list:
    list of strings(top k most frequent words)
    Example
    -------
    """
    file_input=raw_input('please input the file name:')
    k_input = int(raw_input('please input the k number:'))
    return find_top_k_words(file_input, k_input)


def find_top_k_words(file, k):
    """
    a function to find the top k most frequent word in a text
    file. If there are ties in terms of word frequencies, return all.
    return the top k most frequent words
    Parameter
    ---------
    file: string
    file contains many different words
    Return
    ------
    list:
    list of strings(top k most frequent words)
    Example
    -------
    find_top_k_words("test.txt", 3)
    ['I', 'headache', 'have']
    """

    import re
    retDict = {}
    with open(file, 'r') as open_file:
        for line in open_file:
            line_words =re.split(r'[\s+.?*/]',line)
            for word in line_words:
                if word:
                    if '\''in word:
                        i = word.find('\'')
                        first = word[:i]
                        end = word[i+1:]
                        retDict = add_to_count_dict(first, retDict)
                        retDict = add_to_count_dict('\'', retDict)
                        retDict = add_to_count_dict(end, retDict)
                    else:
                        retDict = add_to_count_dict(word, retDict)
    sorted_Dict = sorted(retDict.iteritems(), key=lambda x : x[1], reverse=True)  
    ret = [x[0] for x in sorted_Dict[:k]]
    return ret


def add_to_count_dict(word, retDict=None):
    """
    a function to record word count in dict 
    word: string
    any word may in the retDict
    Return
    ------
    dict:
    key:word
    value:word counts
    Example
    add_to_count_dict("am", {})
    ["am":1]
    """
    iCount = retDict.get(word, 0)
    iCount += 1
    retDict[word] = iCount
    return retDict


if __name__ == "__main__":
    lTest = [1, 3, 5, 7, 9, 11, 13, 15]
    print(fizzbuzz(lTest))
    assert(moving_back('UU')==False)
    assert(moving_back('UDLR')==True)
    assert(longest_common_prefix(['dog', 'done', 'doing'])=='do')
    assert(longest_common_prefix(['dog', 'cat', 'bird'])=='')
    pre_deal_with()


