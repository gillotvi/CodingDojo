//
//  ViewController.m
//  com.axa.dojoCalculateurDeChaine
//
//  Created by Simon & Vincent on 25/06/2014.
//  Copyright (c) 2014 Simon & Vincent. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.lblViewController.text = [NSString stringWithFormat:@"%d", [self add:@""]];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
}

- (int) add:(NSString *)numbers
{
    int myResult;
    NSString *delimiteur;
    
    if(![numbers isEqualToString:@""] && [[numbers substringToIndex:2] isEqualToString:@"//"])
    {
        delimiteur = [numbers substringWithRange:NSMakeRange(2, 1)];
        numbers = [numbers stringByReplacingOccurrencesOfString:[NSString stringWithFormat:@"//%@\n", delimiteur] withString:@""];
    }
    else
    {
        delimiteur = @",";
        numbers = [numbers stringByReplacingOccurrencesOfString:@"\n" withString:@","];
    }
    
    NSArray *numberArray = [numbers componentsSeparatedByString:delimiteur];
    
    myResult = [numberArray[0] intValue];
    if(numberArray.count > 1)
    {
        int sum = 0;
        for (NSString *number in numberArray)
        {
            sum += [number intValue];
        }
        return sum;
    }
    
    return myResult;
}

@end