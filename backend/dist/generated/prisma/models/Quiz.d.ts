import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type QuizModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizPayload>;
export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null;
    _avg: QuizAvgAggregateOutputType | null;
    _sum: QuizSumAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
};
export type QuizAvgAggregateOutputType = {
    id: number | null;
    correctAnswer: number | null;
};
export type QuizSumAggregateOutputType = {
    id: number | null;
    correctAnswer: number | null;
};
export type QuizMinAggregateOutputType = {
    id: number | null;
    question: string | null;
    correctAnswer: number | null;
    explanation: string | null;
};
export type QuizMaxAggregateOutputType = {
    id: number | null;
    question: string | null;
    correctAnswer: number | null;
    explanation: string | null;
};
export type QuizCountAggregateOutputType = {
    id: number;
    question: number;
    options: number;
    correctAnswer: number;
    explanation: number;
    _all: number;
};
export type QuizAvgAggregateInputType = {
    id?: true;
    correctAnswer?: true;
};
export type QuizSumAggregateInputType = {
    id?: true;
    correctAnswer?: true;
};
export type QuizMinAggregateInputType = {
    id?: true;
    question?: true;
    correctAnswer?: true;
    explanation?: true;
};
export type QuizMaxAggregateInputType = {
    id?: true;
    question?: true;
    correctAnswer?: true;
    explanation?: true;
};
export type QuizCountAggregateInputType = {
    id?: true;
    question?: true;
    options?: true;
    correctAnswer?: true;
    explanation?: true;
    _all?: true;
};
export type QuizAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizCountAggregateInputType;
    _avg?: QuizAvgAggregateInputType;
    _sum?: QuizSumAggregateInputType;
    _min?: QuizMinAggregateInputType;
    _max?: QuizMaxAggregateInputType;
};
export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz[P]> : Prisma.GetScalarType<T[P], AggregateQuiz[P]>;
};
export type QuizGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithAggregationInput | Prisma.QuizOrderByWithAggregationInput[];
    by: Prisma.QuizScalarFieldEnum[] | Prisma.QuizScalarFieldEnum;
    having?: Prisma.QuizScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizCountAggregateInputType | true;
    _avg?: QuizAvgAggregateInputType;
    _sum?: QuizSumAggregateInputType;
    _min?: QuizMinAggregateInputType;
    _max?: QuizMaxAggregateInputType;
};
export type QuizGroupByOutputType = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    _count: QuizCountAggregateOutputType | null;
    _avg: QuizAvgAggregateOutputType | null;
    _sum: QuizSumAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
};
type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizGroupByOutputType[P]>;
}>>;
export type QuizWhereInput = {
    AND?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    OR?: Prisma.QuizWhereInput[];
    NOT?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    id?: Prisma.IntFilter<"Quiz"> | number;
    question?: Prisma.StringFilter<"Quiz"> | string;
    options?: Prisma.StringNullableListFilter<"Quiz">;
    correctAnswer?: Prisma.IntFilter<"Quiz"> | number;
    explanation?: Prisma.StringFilter<"Quiz"> | string;
    answers?: Prisma.AnswerListRelationFilter;
};
export type QuizOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    answers?: Prisma.AnswerOrderByRelationAggregateInput;
};
export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    OR?: Prisma.QuizWhereInput[];
    NOT?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    question?: Prisma.StringFilter<"Quiz"> | string;
    options?: Prisma.StringNullableListFilter<"Quiz">;
    correctAnswer?: Prisma.IntFilter<"Quiz"> | number;
    explanation?: Prisma.StringFilter<"Quiz"> | string;
    answers?: Prisma.AnswerListRelationFilter;
}, "id">;
export type QuizOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    _count?: Prisma.QuizCountOrderByAggregateInput;
    _avg?: Prisma.QuizAvgOrderByAggregateInput;
    _max?: Prisma.QuizMaxOrderByAggregateInput;
    _min?: Prisma.QuizMinOrderByAggregateInput;
    _sum?: Prisma.QuizSumOrderByAggregateInput;
};
export type QuizScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizScalarWhereWithAggregatesInput | Prisma.QuizScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizScalarWhereWithAggregatesInput | Prisma.QuizScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Quiz"> | number;
    question?: Prisma.StringWithAggregatesFilter<"Quiz"> | string;
    options?: Prisma.StringNullableListFilter<"Quiz">;
    correctAnswer?: Prisma.IntWithAggregatesFilter<"Quiz"> | number;
    explanation?: Prisma.StringWithAggregatesFilter<"Quiz"> | string;
};
export type QuizCreateInput = {
    question: string;
    options?: Prisma.QuizCreateoptionsInput | string[];
    correctAnswer: number;
    explanation: string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuizInput;
};
export type QuizUncheckedCreateInput = {
    id?: number;
    question: string;
    options?: Prisma.QuizCreateoptionsInput | string[];
    correctAnswer: number;
    explanation: string;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuizInput;
};
export type QuizUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuizNestedInput;
};
export type QuizUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuizNestedInput;
};
export type QuizCreateManyInput = {
    id?: number;
    question: string;
    options?: Prisma.QuizCreateoptionsInput | string[];
    correctAnswer: number;
    explanation: string;
};
export type QuizUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuizUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type QuizCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
};
export type QuizAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
};
export type QuizMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
};
export type QuizMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
};
export type QuizSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
};
export type QuizScalarRelationFilter = {
    is?: Prisma.QuizWhereInput;
    isNot?: Prisma.QuizWhereInput;
};
export type QuizCreateoptionsInput = {
    set: string[];
};
export type QuizUpdateoptionsInput = {
    set?: string[];
    push?: string | string[];
};
export type QuizCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutAnswersInput, Prisma.QuizUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutAnswersInput, Prisma.QuizUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuizUpsertWithoutAnswersInput;
    connect?: Prisma.QuizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuizUpdateWithoutAnswersInput>, Prisma.QuizUncheckedUpdateWithoutAnswersInput>;
};
export type QuizCreateWithoutAnswersInput = {
    question: string;
    options?: Prisma.QuizCreateoptionsInput | string[];
    correctAnswer: number;
    explanation: string;
};
export type QuizUncheckedCreateWithoutAnswersInput = {
    id?: number;
    question: string;
    options?: Prisma.QuizCreateoptionsInput | string[];
    correctAnswer: number;
    explanation: string;
};
export type QuizCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateWithoutAnswersInput, Prisma.QuizUncheckedCreateWithoutAnswersInput>;
};
export type QuizUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuizUpdateWithoutAnswersInput, Prisma.QuizUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuizCreateWithoutAnswersInput, Prisma.QuizUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuizWhereInput;
};
export type QuizUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuizWhereInput;
    data: Prisma.XOR<Prisma.QuizUpdateWithoutAnswersInput, Prisma.QuizUncheckedUpdateWithoutAnswersInput>;
};
export type QuizUpdateWithoutAnswersInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuizUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.QuizUpdateoptionsInput | string[];
    correctAnswer?: Prisma.IntFieldUpdateOperationsInput | number;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuizCountOutputType = {
    answers: number;
};
export type QuizCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | QuizCountOutputTypeCountAnswersArgs;
};
export type QuizCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
};
export type QuizSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    options?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
    answers?: boolean | Prisma.Quiz$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    options?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    options?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectScalar = {
    id?: boolean;
    question?: boolean;
    options?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
};
export type QuizOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "question" | "options" | "correctAnswer" | "explanation", ExtArgs["result"]["quiz"]>;
export type QuizInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | Prisma.Quiz$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type QuizIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $QuizPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quiz";
    objects: {
        answers: Prisma.$AnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        question: string;
        options: string[];
        correctAnswer: number;
        explanation: string;
    }, ExtArgs["result"]["quiz"]>;
    composites: {};
};
export type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizPayload, S>;
export type QuizCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizCountAggregateInputType | true;
};
export interface QuizDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quiz'];
        meta: {
            name: 'Quiz';
        };
    };
    findUnique<T extends QuizFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizFindManyArgs>(args?: Prisma.SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizCreateArgs>(args: Prisma.SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizDeleteArgs>(args: Prisma.SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizUpdateArgs>(args: Prisma.SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizUpsertArgs>(args: Prisma.SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizCountArgs>(args?: Prisma.Subset<T, QuizCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizCountAggregateOutputType> : number>;
    aggregate<T extends QuizAggregateArgs>(args: Prisma.Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>;
    groupBy<T extends QuizGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizFieldRefs;
}
export interface Prisma__QuizClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    answers<T extends Prisma.Quiz$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quiz$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizFieldRefs {
    readonly id: Prisma.FieldRef<"Quiz", 'Int'>;
    readonly question: Prisma.FieldRef<"Quiz", 'String'>;
    readonly options: Prisma.FieldRef<"Quiz", 'String[]'>;
    readonly correctAnswer: Prisma.FieldRef<"Quiz", 'Int'>;
    readonly explanation: Prisma.FieldRef<"Quiz", 'String'>;
}
export type QuizFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizCreateInput, Prisma.QuizUncheckedCreateInput>;
};
export type QuizCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizCreateManyInput | Prisma.QuizCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    data: Prisma.QuizCreateManyInput | Prisma.QuizCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizUpdateInput, Prisma.QuizUncheckedUpdateInput>;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizUpdateManyMutationInput, Prisma.QuizUncheckedUpdateManyInput>;
    where?: Prisma.QuizWhereInput;
    limit?: number;
};
export type QuizUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizUpdateManyMutationInput, Prisma.QuizUncheckedUpdateManyInput>;
    where?: Prisma.QuizWhereInput;
    limit?: number;
};
export type QuizUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateInput, Prisma.QuizUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizUpdateInput, Prisma.QuizUncheckedUpdateInput>;
};
export type QuizDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    limit?: number;
};
export type Quiz$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerScalarFieldEnum | Prisma.AnswerScalarFieldEnum[];
};
export type QuizDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
};
export {};
